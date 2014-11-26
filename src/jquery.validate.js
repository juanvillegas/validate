(function ( $ ) {

	function _validate_exact_length( value, exact ){
		if( value.length == exact ){
			return true;
		}else{
			return false;
		}
	}
	function _validate_min_length( value, min ){
		if( value.length >= min ){
			return true;
		}else{
			return false;
		}
	}

	function _validate_max_length( value, max ){
		if( value.length <= max ){
			return true;
		}else{
			return false;
		}
	}

	function _validate_confirm_email( value, selector ){
		if( value == jQuery( selector ).val() ){
			return true;
		}else{
			return false;
		}
	}

	function _validate_cc( value ){
		return _validate_numeric(value) && _validate_exact_length(value, 16);
	}

	function _validate_numeric( value ){
		var re = /^[0-9]+$/;
		return re.test( value );
	}

	function _validate_email( value ){
		var re = /^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
		return re.test( value );
	}

	function _validate_phone( value ){
		var re = /^((([0-9]{1})*[- .(]*([0-9]{3})[- .)]*[0-9]{3}[- .]*[0-9]{4})+)*$/;
		return re.test( value );
	}

	function _validate_required( field ){
		if( field.val() == '' ){
			return false;
		}else{
			return true;
		}
	}

	function _validate_required_if( field, otherElement, otherValueRequired ){
        // TODO:
        return true;

	}

	function _validate_checked( field ) {
		return field.is(':checked');
	}


	// name => list of errors
	var lastValidationErrors = {};
	var hasErrors = false;


	$.fn.validate = function( options ){

		return this.each(function() {

	        var $form = $(this);

	        $form.on('submit', function(evt){

	            lastValidationErrors = new Object();

	            $form.find('.validate').each(function(){
	            	var errors = $.fn.validate.getErrors( $(this) );
	            	var elemName = $(this).attr('name');
	            	if( errors.length > 0 ){
	            		lastValidationErrors[elemName] = errors;
	            	}
	            });

	            if($.assocArraySize(lastValidationErrors) > 0){
                    hasErrors = true;

	            	// fire the frontend messages callback
	            	options.onSubmitErrorCallback.call(this, lastValidationErrors);
	            }else{
		            // fire the submit callback
		            options.onSubmitSuccessCallback.call(this);
	            }
    			evt.preventDefault();
	        });

        });
	}


	$.fn.testForm = function( o ){
		return this.each(function() {
			var $container = $(this);
			lastValidationErrors = new Object();

            $container.find('.validate').each(function(){
            	var errors = $.fn.validate.getErrors( $(this) );
            	var elemName = $(this).attr('name');
            	if( errors.length > 0 ){
            		lastValidationErrors[elemName] = errors;
            	}
            });

            if( $.assocArraySize(lastValidationErrors) > 0 ){
                hasErrors = true;

                if(o.onError){
                    // fire the frontend messages callback
                    o.onError($container, lastValidationErrors);
                }
            }else{
                if(o.onSuccess){
                    // fire the success callback
                    o.onSuccess();
                }
            }
		});
	}


	$.fn.validate.getErrors = function ( $element ){
		var errors = new Array();

		try {
			var value = $element.val();
			var rules = $element.attr( 'data-rules' ).split(",");

			$.each( rules, function(index, rule){

				var error;

                ruleName = rule.split(":");
                ruleName = ruleName[0];

                switch( ruleName ){
                    case "checked":
                        if( ! _validate_checked( $element ) ){
                            error = "checkbox";
                        }
                        break;
                    case "required":
                        if( ! _validate_required( $element ) ){
                            error = "required";
                        }
                        break;
					case "required_if":
                        try {
                            var ruleParams = rule.split(":");

                            var conditionSelector = ruleParams[1]; // <= ID of the condition
                            var conditionValue = ruleParams[2]; // <= value to test against

                            if( ! _validate_required_if( $element, conditionSelector, conditionValue) ){
                                error = "required_if";
                            }
                        }catch( error ){
                            console.debug('Validate: malformed rule "confirmEmail" in field ' + $element.attr('name') );
                        }
                        break;
                    case "email":
                        if( ! _validate_email( value ) ){
                            error = "email";
                        }
                        break;
                    case "numeric":
                        if( ! _validate_numeric( value ) ){
                            error = "numeric";
                        }
                        break;
                    case "cc":
                        if( ! _validate_cc( value.replace( /\s/g, "" ) ) ){
                            error = "cc";
                        }
                        break;
                    case "phone":
                        if( ! _validate_phone( value.replace( /\s/g, "" ) ) ){
                            error = "phone";
                        }
                        break;
                    case 'confirmEmail':
                        try {
                            var selector = rule.split(":")[1]; // <= ID of the sibling
                            if( ! _validate_confirm_email( value, selector ) ){
                                error = 'confirmEmail';
                            }
                        }catch( error ){
                            console.debug('Validate: malformed rule "confirmEmail" in field ' + $element.attr('name') );
                        }
                        break;
                    case 'min_length':
                        try {
                            var min = rule.split(":")[1];
                            if( ! _validate_min_length( value, min ) ){
                                error = 'min_length';
                            }
                        }catch( error ){
                            console.debug('Validate: malformed rule "min_length" in field ' + $element.attr('name') );
                        }
                        break;
                    case 'max_length':
                        try {
                            var max = rule.split(":")[1];
                            if( ! _validate_max_length( value, max ) ){
                                error = 'max_length';
                            }
                        }catch( error ){
                            console.debug('Validate: malformed rule "max_length" in field ' + $element.attr('name') );
                        }
                        break;
                    case 'exact_length':
                        try {
                            var exact = rule.split(":")[1];
                            if( ! _validate_exact_length( value, max ) ){
                                error = 'exact_length';
                            }
                        }catch( error ){
                            console.log('Validate: malformed rule "exact_length" in field ' + $element.attr('name') );
                        }
                        break;
                }

                if( error != undefined ){
                    errors.push(error);
                }
            });
        }catch( err ){
            console.log('Validate: ' + err + ' occurred in ' + $element.attr('name'));
        }
        return errors;

	}// end getErrors


    $.assocArraySize = function(obj) {
        // http://stackoverflow.com/a/6700/11236
        var size = 0, key;
        for (key in obj) {
            if (obj.hasOwnProperty(key)) size++;
        }
        return size;
    };

}( jQuery ));