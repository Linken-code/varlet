import { VarComponent, BasicAttributes } from './varComponent'

export type AllowedTime = {
  hours?: (hour: number) => boolean
  minutes?: (minute: number) => boolean
  seconds?: (second: number) => boolean
}

export type TimePickerFormat = 'ampm' | '24hr'

export interface TimePickerProps extends BasicAttributes {
  modelValue?: string
  elevation?: boolean
  color?: string
  headerColor?: string
  allowedTime?: AllowedTime
  format?: TimePickerFormat
  min?: string
  max?: string
  useSeconds?: boolean
  readonly?: boolean
  onChange?: (value: string) => void
  'onUpdate:modelValue'?: (value: string) => void
}

export class TimePicker extends VarComponent {
  $props: TimePickerProps
}

export class _TimePickerComponent extends TimePicker {}
