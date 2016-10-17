//这些代码初始化了应用所在的平台，然后使用此平台引导你的 AppModule 。

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';

const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);