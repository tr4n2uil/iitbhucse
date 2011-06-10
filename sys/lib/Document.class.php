<?php 
/**
 *	Document class
**/
class Document {

	/**
	 *	@param title 	string
	 *	@param styles 	array
	**/
	public static function header($model){
		$title = $model['title'];
		$styles = $model['styles'];
		
		echo <<<HEADER
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"  "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="en" xml:lang="en">
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
		<title>$title</title>
HEADER;

		foreach($styles as $style){
			echo <<<STYLE
		<link rel="stylesheet" type="text/css" href="ui/css/$style" />
STYLE;
		}
		
		echo "</head><body>";
		
		unset($model['title']);
		unset($model['styles']);
	}
	
	/**
	 *	@param scripts 	array
	**/
	public static function footer($model){
		$scripts = $model['scripts'];
		$footer = $model['footer'];
		
		echo <<<FOOTER
		<div id="footer">
			$footer
		</div>

		<ul id="validation">
			<li><a href="http://validator.w3.org/check?uri=referer"><img src="ui/img/validation/valid-xhtml10-blue.png" alt="Valid XHTML 1.0!" height="31" width="88" /></a></li>
			<li><a href="http://jigsaw.w3.org/css-validator/check/referer"><img src="ui/img/validation/valid-css-blue.png" alt="Valid CSS!" height="31" width="88" /></a></li>
		</ul>
FOOTER;
		
		foreach($scripts as $key=>$value){
			echo <<<SCRIPT
		<script type="text/javascript">
			document.getElementById('load-status').innerHTML = 'Loading $key ...';
		</script>
		<script type="text/javascript" src="ui/js/$value"></script>
		<iframe id="upload_target" name="upload_target" src="#" style="width:0;height:0;border:0px solid #fff;"></iframe>
SCRIPT;
		}
		
		unset($model['scripts']);
		unset($model['footer']);
	}
	
}
?>