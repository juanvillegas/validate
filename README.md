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

<select name="mySelect" class="validate" data-rules="required,min_length:5">
	<option>...</option>
	<option>...</option>
</select>

3. Call validate() on your form

<script>
	$form.validate();
</script>

4. Whenever the form is submitted, the validate() function will execute and, if it fails to validate the values of your controls with your data-rules specified, it will preventDefault() the submission. A class is added to those elements that fail to validate, so you can easily display error messages just using a CSS sheet.

api
---------

<< working here, come back soon >>