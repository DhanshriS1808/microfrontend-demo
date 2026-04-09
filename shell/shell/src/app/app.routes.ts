import { loadRemoteModule } from '@angular-architects/module-federation';
import { provideHttpClient } from '@angular/common/http';
import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'student',
        providers:[provideHttpClient()],
        loadComponent:() => loadRemoteModule({
            type: 'module',
            remoteEntry: 'http://localhost:4201/remoteEntry.js',
            exposedModule: './App'
        }).then(m => m.App)
    }
];

