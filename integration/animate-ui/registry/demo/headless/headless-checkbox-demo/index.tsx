import { Checkbox } from '@/registry/headless/headless-checkbox';
import { Field, Label } from '@headlessui/react';

export const HeadlessCheckboxDemo = () => {
  return (
    <Field className="flex items-center space-x-2">
      <Checkbox id="terms" />
      <Label htmlFor="terms" className="text-sm font-medium">
        Accept terms and conditions
      </Label>
    </Field>
  );
};
