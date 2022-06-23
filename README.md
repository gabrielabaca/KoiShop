# KoiShop
KoiShop - React-Native


## Para correr la app

### Actualizar dependencias:
```
yarn install
```
### Para correr la app:
```
yarn android
```
### Puede ser necesario correr 'react-native' manualmente
```
npx react-native start
```

### ADB
En la app no puede conectarse a 'metro'
```
adb reverse tcp:8081 tcp:8081

```
---
## Sobre la app


Se realizaron consultas a una api de prueba subida a este mismo repo (db.json), la misma se puede acceder desde:
https://my-json-server.typicode.com/gabrielabaca/KoiShop/fake/

- Se puede modificar la direccion base de consultas en /src/api/api.ts

### Rutas para Boton "Buscar", "Siguiente" y "Anterior"

* Buscar: baseURL/item
* Siguiente: baseURL?page={page}



