<script setup lang="ts">
import { parse as parseYaml } from 'yaml';
import type { UseValidationRule } from '@/composable/validation';
import { isNotThrowing } from '@/utils/boolean';
import { withDefaultOnError } from '@/utils/defaults';

function transformer(value: string) {
  return withDefaultOnError(() => {
    const obj = parseYaml(value);
    return obj ? JSON.stringify(obj, null, 3) : '';
  }, '');
}
const { t } = useI18n();
const rules: UseValidationRule<string>[] = [
  {
    validator: (value: string) => isNotThrowing(() => parseYaml(value)),
    message: 'Provided YAML is not valid.',
  },
];
</script>

<template>
  <format-transformer
    :input-label="t('tools.yaml-to-json-converter.yaml')"
    :input-placeholder="t('tools.yaml-to-json-converter.content')"
    :output-label="t('tools.yaml-to-json-converter.json')"
    output-language="json"
    :input-validation-rules="rules"
    :transformer="transformer"
  />
</template>
