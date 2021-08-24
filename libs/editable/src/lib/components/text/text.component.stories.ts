import { text, number, boolean, color, select } from '@storybook/addon-knobs';
import { TextComponent } from './text.component';
import { TextModule } from './text.module';
import { action } from '@storybook/addon-actions';

export default {
  title: 'TextComponent',
};

export const primary = () => ({
  moduleMetadata: {
    imports: [TextModule],
  },
  component: TextComponent,
  props: {
    backgroundColor: color('backgroundColor', `#D0B0DA`),
    dataStatus: select('dataStatus', ['saved', 'updating'], 'saved'),
    textValue: text('textValue', ''),
    updateText: action('updateText')
  },
});
