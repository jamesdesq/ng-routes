# Authentication app 

This is intended as a sandbox for Auth0 authentication. 

I also did Deborah Kurata's Angular Routing course on PluralSight: 

https://github.com/DeborahK/Angular-Routing

## Running the app locally

`ng serve`

## Notes from DK 

### Lazy loading

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

### Not lazy loading

1. Generate a module, and associated component(s) as above.

2. You'll have a routing file in your module, and you can add the route in the forChild routing array , like this: 

```
const routes: Routes = [{ path: 'orders', component: OrderComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
```

...and you can add the route the component. 

3. Make sure that you've imported your feature module into app.module, and that the import is above the routing module import in the imports array! 
