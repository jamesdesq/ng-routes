# Authentication app 

This is intended as a sandbox for Auth0 authentication. 

## Running the app locally

`ng serve`

## Notes from DK 

1. Creating modules with routing: 

`ng generate module products --route products --module app.module`

e.g. to generate a module file called products that uses the route products that's registered in the app.module. 

2. Creating components in the module: 

`ng generate component products/Product`

e.g. to generate a component called ProductComponent in the products module

3. Lazy loading the modules

In app-routing.module.ts, add the following to the routes array: 

`{ path: 'products', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule) },`

Note that we have a path, then the load children function, then the path to the module file, then the ProductsModule.
