---
page_type: sample
products:
- office-outlook
- office-365
languages:
- javascript
extensions:
  contentType: samples
  technologies:
  - Add-ins
  createdDate: 8/18/2015 3:24:21 PM
---
# Outlook-Add-in-ForwardEmail
En esta aplicación de ejemplo, se muestra cómo usar JavaScript y los servicios Web Exchange en una aplicación de correo para Outlook que reenvía los elementos de correo actuales a una lista de direcciones de correo electrónico definida por el usuario y, de forma opcional, incluye comentarios definidos por el usuario con el correo electrónico reenviado.

**Descripción del ejemplo**
En la figura 1 se muestra la aplicación de correo de ejemplo disponible en la barra de aplicaciones del correo electrónico del usuario en Outlook Web Access..

![Figura 1. La aplicación de correo de ejemplo en la barra de aplicaciones.](/description/c3d5f40e-654f-493c-892d-73cc8f18b458image.jpg)


Cuando el usuario elige la aplicación de correo en la barra de aplicaciones, se expande la vista de la interfaz de usuario completa de la aplicación. A continuación, el usuario puede escribir las direcciones de correo electrónico separadas por punto y coma en el espacio proporcionado y, opcionalmente, cualquier comentario que quiera enviar con el correo.

Por último, cuando el usuario elije el botón Ir en la interfaz de usuario de la aplicación, el código JavaScript reenvía el correo electrónico a cada una de las direcciones que especifica el usuario e incluye los comentarios del cuadro de texto Comentarios con el correo. La interfaz de usuario de la aplicación mostrará un mensaje en el que se indicará si la operación se realizó con éxito.

**Requisitos previos**


Este ejemplo requiere lo siguiente:

* Visual Studio 2012 (RTM).
* Office 2013 Tools para Visual Studio 2012 (RTM).
* Puede obtener acceso a un sitio para desarrolladores de Office 365 (recomendado) o a una instalación local de Exchange Server 2013. Puede [participar en el Programa de desarrolladores de Office 365 y obtener una suscripción gratuita de 1 año a Office 365](https://aka.ms/devprogramsignup).

**Componentes clave del ejemplo**

La aplicación de ejemplo contiene lo siguiente:

* El proyecto OutlookEmailForwarder, que contiene:
* El archivo de manifiesto OutlookEmailForwarder.xml.
* El proyecto OutlookEmailForwarderWeb, que contiene varios archivos de plantilla. Los archivos que se han desarrollado como parte de esta solución de ejemplo son los siguientes:
* OutlookEmailForwarder.html (en la carpeta Pages). Este contiene la interfaz de usuario HTML que se muestra en el panel de tareas. Consta de HTML simple, dos controles de entrada de texto y un botón de control de entrada.
* OutlookEmailForwarder.js (en la carpeta Scripts). Este archivo de script contiene código que se ejecuta cuando se carga la aplicación.

El resto de los archivos se proporcionan automáticamente en la plantilla de proyecto de Visual Studio para las aplicaciones de Office y no se han modificado en el desarrollo de esta aplicación de ejemplo.

**Configurar el ejemplo**

Para probar el ejemplo, suscríbase a un sitio para desarrolladores de Office 365 y, a continuación, envíe al menos un correo electrónico a una cuenta de correo que haya configurado antes de ejecutar este ejemplo. Como alternativa, puede configurar una instalación local de Exchange Server 2013\. Asegúrese de que se haya configurado al menos un buzón de correo para usted y, después, envíe al menos un correo electrónico a esa cuenta antes de ejecutar este ejemplo. No es necesaria ninguna otra configuración.

**Compilar el ejemplo**

Presione las teclas Ctrl+Mayús+B para compilar la solución.

**Iniciar y probar la aplicación**

1. Presione la tecla F5 para ejecutar la aplicación. Aparecerá el siguiente cuadro de diálogo.
![Figura 4. Cuadro de diálogo Conectar con cuenta de correo de Exchange](/description/image.jpg)


2. Escriba las credenciales de su sitio para desarrolladores de Office 365 y, a continuación, elija el botón Conectar para permitir que la aplicación detecte automáticamente la URL de los servicios Web Exchange y la dirección URL de Outlook Web Access que necesitará para implementar y ejecutar el ejemplo.
3. Es posible que se le solicite iniciar sesión en Outlook Web Access a fin de acceder a su sitio para desarrolladores de Office 365. En ese caso, escriba las mismas credenciales que utilizó en el paso 2.
4. Luego, puede seguir los pasos que se describen al principio de este documento para ver la aplicación en acción.

**Solucionar problemas**

Si intenta usar una instalación local de Exchange Server, pida a un administrador de Exchange que verifique que el servidor de Exchange 2013 esté configurado correctamente. Se recomienda suscribirse a un sitio para desarrolladores de Office 365 a fin de probar este ejemplo, ya que la configuración de una instalación local de Exchange Server 2013 puede ser compleja y llevar mucho tiempo.

**Registro de cambios**

* Primera versión: 15 de abril de 2013
* Publicación en GitHub: 19 de agosto de 2015

**Contenido relacionado**

* [Más complementos de ejemplo](https://github.com/OfficeDev?utf8=%E2%9C%93&query=-Add-in)
* [Crear aplicaciones para Office](http://msdn.microsoft.com/library/office/jj220060.aspx)
* [Aplicaciones de correo para Outlook](http://msdn.microsoft.com/library/office/fp161135.aspx)
* [Registrarse en un sitio para desarrolladores de Office 365](http://msdn.microsoft.com/library/fp179924.aspx)


Este proyecto ha adoptado el [Código de conducta de código abierto de Microsoft](https://opensource.microsoft.com/codeofconduct/). Para obtener más información, vea [Preguntas frecuentes sobre el código de conducta](https://opensource.microsoft.com/codeofconduct/faq/) o póngase en contacto con [opencode@microsoft.com](mailto:opencode@microsoft.com) si tiene otras preguntas o comentarios.
