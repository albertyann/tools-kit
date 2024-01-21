<script setup lang="ts">
import { stringify as stringifyToml } from 'iarna-toml-esm';
import { parse as parseYaml } from 'yaml';
import { withDefaultOnError } from '../../utils/defaults';
import type { UseValidationRule } from '@/composable/validation';

const convertYamlToToml = (value: string) => [stringifyToml(parseYaml(value))].flat().join('\n').trim();

const transformer = (value: string) => value.trim() === '' ? '' : withDefaultOnError(() => convertYamlToToml(value), '');
const { t } = useI18n();

const rules: UseValidationRule<string>[] = [
  {
    validator: (v: string) => v === '' || parseYaml(v),
    message: 'Provided JSON is not valid.',
  },
];
</script>

<template>
  <format-transformer
    :input-label="t('tools.yaml-to-toml.yaml')"
    :input-placeholder="t('tools.yaml-to-toml.content')"
    :output-label="t('tools.yaml-to-toml.toml')"
    output-language="toml"
    :input-validation-rules="rules"
    :transformer="transformer"
  />
</template>
