<script setup lang="ts">
import { stringify } from 'yaml';
import JSON5 from 'json5';
import type { UseValidationRule } from '@/composable/validation';
import { isNotThrowing } from '@/utils/boolean';
import { withDefaultOnError } from '@/utils/defaults';

const transformer = (value: string) => withDefaultOnError(() => stringify(JSON5.parse(value)), '');
const { t } = useI18n();
const rules: UseValidationRule<string>[] = [
  {
    validator: (value: string) => value === '' || isNotThrowing(() => stringify(JSON5.parse(value))),
    message: 'Provided JSON is not valid.',
  },
];
</script>

<template>
  <format-transformer
    :input-label="t('tools.json-to-yaml-converter.json')"
    :input-placeholder="t('tools.json-to-yaml-converter.content')"
    :output-label="t('tools.json-to-yaml-converter.yaml')"
    output-language="yaml"
    :input-validation-rules="rules"
    :transformer="transformer"
  />
</template>
