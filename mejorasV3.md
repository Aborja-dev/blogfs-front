# Refactorizar a clean architecture
## domain
seran funciones puras y definiciones agnosticas al framework
### entities
las entidades del sistema, tendran prefijo I (interface)
### formTypes
los tipos de de formulario, tendran prefijo F (form)
## clases
clases abstractas
### types
los demas tipos proximos a factorizar
## infrastructure
los hooks de react, use context, use reducer y hooks personalizados y componentes
### hooks
useResource
    cordina las peticiones y el manejo del estado
useLogin
    controla el inicio de sesion y la permanencia
useLoading
    controla el estado de carga y las notificaciones
### context
global context
    maneja el contexto global que entrega ciertos estados
### interface (cambiado a ui)
contendra elemntos esteticos y de interfaz
# refactorizar a un contexto global que solo de el valor y el se
# crear pruebas
* login correcto
* login falso
* cargar lista
* crear blogs
* eliminar blogs
* darle like