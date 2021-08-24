import { text, number, boolean } from '@storybook/addon-knobs';
import { PaginatorComponent } from './paginator.component';
import { TextModule } from '../text/text.module';
import { action } from '@storybook/addon-actions';

export default {
  title: 'PaginatorComponent',
  component: PaginatorComponent,
};

export const primary = () => ({
  moduleMetadata: {
    imports: [],
  },
  component: PaginatorComponent,
  props: {
    totalPages: number('totalPages', 0),
    currentPage: number('currentPage', 0),
    size: text('size', 'md'),
    increment: action('increment'),
    decrement: action('decrement'),
  },
});
