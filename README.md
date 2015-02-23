validate
========

Lightweight, straightforward jQuery validation script


what it does?
--------

Its a very simple validation library for jQuery. Its something I coded to use in my own projects in response to all that bloated validation libraries which offer just "too much" functionality at the price of unreadable documentation, untested functions and unexpected results.

This library provides a couple of functions described below which allow to easily validate a form or an aribtrary set of form controls (input, select, checkboxes, etc).

I have provided a set of "common" rules, but feel free to code your own rule and send a pull request.

quick start
---------

1. Include the library

<script src="path/to/jquery.validate.min.js"></script>

2. Add the required HTML5 markup to your form, like so:

```html
<select name="mySelect" class="validate" data-rules="required,min_length:5">
	<option>...</option>
	<option>...</option>
</select>
```

3. Call validate() on your form

```javascript
<script>
	$form.validate();
</script>
```

4. Whenever the form is submitted, the validate() function will execute and, if it fails to validate the values of your controls with your data-rules specified, it will preventDefault() the submission. A class is added to those elements that fail to validate, so you can easily display error messages just using a CSS sheet.

api
---------

<< working here, come back soon >>



DEMO



RESUMEN
	El valle de Viedma (Río Negro) es un área bajo riego de reciente colonización ya que los primeros colonos se asentaron en la década del setenta del siglo pasado. A lo largo del proceso, se tuvo la sensación de que el proyecto tal cual fue previsto para lograr el desarrollo a partir de la producción primaria y agroindustrial, no tuvo el progreso esperado y la frustración se instaló en el valle. Sin embargo, desde los primeros años del siglo XXI se observa un cambio de expectativas y un mayor dinamismo.
	Uno de los objetivos de este estudio fue conocer las nuevas categorías de productores primarios, las estrategias utilizadas y como se generaron. Se postuló que los capitales disponibles, la influencia del entorno y las características del productor y su grupo familiar son determinantes para la selección de las estrategias a desarrollar. Por otro lado se sostuvo que la suma de estrategias similares desencadena procesos locales, que con menor o mayor grado de innovación origina transformaciones en el territorio.
	Los productores y sus estrategias junto a las relaciones y vínculos que generan, permite suponer que en el territorio existe una “nueva ruralidad”, y que un nuevo modelo de  desarrollo caracterizado por la fragmentación se despliega y permite el surgimiento de una sociedad rural más diversificada donde lo nuevo se mezcla con tradicional, con lazos con otras regiones y el medio urbano.
La colonización del valle de Viedma sucedió en el marco de un contexto  internacional como nacional cambiante, por lo que se realizó un detalle de los principales hechos políticos y económicos ocurridos lo largo de los últimos 50 años.
	Se realizaron entrevistas semi estructuradas a 28 productores, la mayor parte de ellos con una actitud activa y en algunos casos innovadoras hacia el territorio. Los resultados permitieron clasificar las estrategias adoptadas por los productores primarios de acuerdo al capital principal que le dio origen, diferenciando aquellas basadas en el capital cultural, económico, social y político. 
Posteriormente, una encuesta realizada al 5 % de las parcelas existentes en el valle de Viedma expuso las diferentes categorías de productores y los procesos locales existentes en el territorio. Los procesos locales son variados y se destacan como innovadores  aquellos que incorporan nuevos productos (uva para vino, frutos secos, etc.), nuevos mercados (MERCOSUR, Unión Europea, etc.), nuevos procesos (escala de gestión, gestión más profesionalizada, uso del espacio rural para usos diferentes (vivienda, turismo rural, paisaje, etc.). 
Las conclusiones permiten sostener que el territorio se muestra fragmentado, dinamizado por diferentes categorías de productores, con múltiples relaciones con el secano y el medio urbano, adquiriendo una importancia destacable el ingreso extra predial, la pluri actividad, la multifuncionalidad del espacio rural, una tendencia a la concentración de la tierra y una incipiente relación con los mercados internacionales. 


ABSTRACT
The valley of Viedma (Río Negro) is a newly irrigated area colonization since the first colonists settled in the seventies of the last century. Throughout the process, it was felt that the project as it was planned for development from primary production and agro had not expected progress and frustration settled in the valley. However, since the early years of this century there has been a change in expectations and dynamism.
One objective of this study was to determine the new categories of primary producers, the strategies used and how they were generated. It was postulated that the funds available, the influence of the environment and the characteristics of the producer and his family are crucial for the selection of strategies to develop. On the other hand it was argued that the sum of local processes triggered similar strategies, with greater or lesser degree of innovation causes changes in the territory.
Producers and their strategies together to generate relationships and ties, suggests that in the area there is a "new rurality" and that a new model of development characterized by fragmentation unfolds and allows the emergence of a more diversified rural society where the new is mixed with traditional ties with other regions and urban areas.
Colonization Viedma Valley happened in the context of a changing international and national context, so that was a detail of the major political and economic events that occurred over the last 50 years.
Semi-structured interviews were conducted with 28 farmers, most of them with a proactive and innovative in some cases to the territory. The results allowed us to classify the strategies adopted by primary producers according to the principal that originated, differentiating those based on cultural capital, economic, social and political.
Subsequently, a survey 5% of existing plots in the valley of Viedma explained the different categories of producers and local processes in the territory. Local processes are varied and stand out as those that incorporate innovative new products (wine grapes, nuts, etc.), New markets (MERCOSUR, EU, etc.), new processes (management scale, more professional management, use of rural areas for different uses (housing, rural tourism, landscape, etc.).
The findings allow us to maintain the territory shown fragmented, energized by different categories of producers, with multiple relationships with the dry and the urban environment, acquiring a remarkable importance predial the extra income, the multi activity, multifunctionality of rural areas, a trend the concentration of land and a budding relationship with international markets.

