+++
title = "Shortcodes personalizados"
date = 2023-02-19
updated = 2023-05-21
description = "Este tema incluye algunos shortcodes personalizados útiles que puedes utilizar para mejorar tus publicaciones. Puedes mostrar imágenes que se adapten a los temas claro y oscuro, dar formato a una sección de referencias con un aspecto profesional, y más."

[taxonomies]
tags = ["funcionalidad", "shortcodes"]
+++

## Shortcodes de imágenes

### Imágenes de doble tema

Útil si deseas usar una imagen diferente para los temas claro y oscuro:

{{ dual_theme_image(light_src="img/paris_day.webp", dark_src="img/paris_night.webp" alt="La Torre Eiffel") }}

#### Uso
```
{{/* dual_theme_image(light_src="img/paris_day.webp", dark_src="img/paris_night.webp" alt="La Torre Eiffel") */}}
```

### Imagen invertible

Ideal para gráficos, dibujos lineales, diagramas... Invierte los colores de la imagen. La imagen de origen se utilizará para el tema claro.

{{ invertible_image(src="img/graph.webp", alt="Gráfico invertible") }}

#### Uso

```
{{/* invertible_image(src="img/graph.webp", alt="Gráfico invertible") */}}
```


### Imagen atenuable

Las imágenes con demasiado brillo o contraste pueden ser impactantes en un fondo oscuro. Aquí tienes un ejemplo de una fotografía que se atenúa cuando el tema oscuro está activo.

{{ dimmable_image(src="img/desert_by_oskerwyld.webp", alt="Fotografía de un desierto, cielo celestial") }}

#### Uso

```
{{/* dimmable_image(src="img/desert_by_oskerwyld.webp", alt="Fotografía de un desierto, cielo celestial") */}}
```

## Referencias

### Sangría francesa

Este shortcode formatea una sección de referencias con sangría francesa de la siguiente manera:

{% references() %}

Alderson, E. (2015). Ciberseguridad y justicia social: Una crítica a la hegemonía corporativa en un mundo digital. *New York Journal of Technology, 11*(2), 24-39. [https://doi.org/10.1007/s10198-022-01497-6](https://doi.org/10.1007/s10198-022-01497-6).

Funkhouser, M. (2012). Las normas sociales de indecencia: Un análisis del comportamiento desviado en la sociedad contemporánea. *Los Angeles Journal of Sociology, 16*(3), 41-58. [https://doi.org/10.1093/jmp/jhx037](https://doi.org/10.1093/jmp/jhx037).

Schrute, D. (2005). La revolución de la agricultura de remolacha: Un análisis de la innovación agrícola. *Scranton Agricultural Quarterly, 38*(3), 67-81.

Steinbrenner, G. (1997). El análisis costo-beneficio de George Costanza: Un examen del comportamiento de toma de riesgos en el lugar de trabajo. *New York Journal of Business, 12*(4), 112-125.

Winger, J. A. (2010). El arte del debate: Un examen de la retórica en el modelo de las Naciones Unidas del Greendale Community College. *Colorado Journal of Communication Studies, 19*(2), 73-86. [https://doi.org/10.1093/6seaons/1movie](https://doi.org/10.1093/6seaons/1movie).

{% end %}

#### Uso

```
{%/* references() */%}

Tus referencias van aquí.

Cada una en una línea nueva. Se renderizará Markdown (enlaces, cursivas…).

{%/* end */%}
```
