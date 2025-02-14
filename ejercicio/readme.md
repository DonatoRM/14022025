# Enunciado del ejercicio

Desarrolla un script en JavaScript que mejore la accesibilidad de una página web.

El script debe incluir las siguientes funcionalidades:

* Alternar Modo de Alto Contraste:
Debe existir un botón con el ID toggle-contrast que, al ser clickeado, alterne la clase high-contrast en el elemento body del documento. Esto permitirá cambiar el tema de la página a un modo de alto contraste para mejorar la visibilidad.

* Ajustar el Tamaño de la Fuente:
Debe haber dos botones, uno con el ID increase-font y otro con el ID decrease-font, que permitan aumentar y disminuir el tamaño de la fuente de la página respectivamente. El tamaño de la fuente debe incrementarse o disminuirse en 2px con cada click, con un tamaño mínimo de 12px.

* Validación Accesible del Formulario:
Debe existir un formulario con el ID contact-form que, al ser enviado, prevenga el comportamiento por defecto y muestre un mensaje de retroalimentación en un elemento con el ID feedback. El mensaje debe indicar que el formulario ha sido enviado correctamente.

* Navegación con Teclado Mejorada:
Debe detectarse cuando un usuario navega por la página usando la tecla Tab. Cuando un elemento recibe el foco mediante la navegación por teclado, se le debe agregar la clase focus-visible para resaltarlo visualmente. Esta clase debe ser removida cuando se haga click en cualquier parte de la página.