import { UtilizationTracker } from '@zywave/zui-base/dist/utilization-tracker.js';

/* Import all ZUI components */
import '@zywave/zui-breadcrumbs';
import '@zywave/zui-button';
import '@zywave/zui-card';
import '@zywave/zui-checkbox';
import '@zywave/zui-error-page';
import '@zywave/zui-expander';
import '@zywave/zui-formfield';
import '@zywave/zui-icons';
import '@zywave/zui-input';
import '@zywave/zui-logo';
import '@zywave/zui-multipicker';
import '@zywave/zui-notifier';
import '@zywave/zui-pager';
import '@zywave/zui-picker';
import '@zywave/zui-progress';
import '@zywave/zui-radio';
import '@zywave/zui-search';
import '@zywave/zui-select';
import '@zywave/zui-shell';
import '@zywave/zui-slider';
import '@zywave/zui-spinner';
import '@zywave/zui-svg';
import '@zywave/zui-tabs';
import '@zywave/zui-tag';
import '@zywave/zui-textarea';
import '@zywave/zui-toggle';
import '@zywave/zui-tooltip';
import '@zywave/zui-well';

window.zywave = { ...window.zywave };
window.zywave.zui = { ...window.zywave.zui, analytics: UtilizationTracker };

const zuiDialogElementPromises = [];
if (!window.HTMLDialogElement) {
  zuiDialogElementPromises.push(
    import('dialog-polyfill').then((exports) => {
      window.zywave.zui.dialogPolyfill = exports.default;
    })
  );
}
zuiDialogElementPromises.push(import('@zywave/zui-dialog'));
Promise.allSettled(zuiDialogElementPromises);

if (!window.getComputedStyle(document.documentElement).getPropertyValue('--zui-blue')) {
  import('./color-polyfills.js');
}
