js-getElmPosition
=================

Howto
-------------
* getElmPosition(elm).top
* getElmPosition(elm).left

Reference
-------------
DOM
<pre>
&lt;div&gt;
  parent
  &lt;div id="hoge"&gt;hoge&lt;/div&gt;
&lt;/div&gt;
</pre>

JS
<pre>
getElmPosition(document.getElementById('hoge')).top;
</pre>

Example
<pre>
&lt;!Doctype html&gt;
&lt;html&gt;&lt;body&gt;
&lt;div&gt;
  parent
  &lt;div id="hoge"&gt;hoge&lt;/div&gt;
&lt;/div&gt;
&lt;script src="get_elm_position.js"&gt;&lt;/script&gt;
&lt;script&gt;
alert(getElmPosition(document.getElementById('hoge')).top);
&lt;/script&gt;
&lt;/body&gt;&lt;/html&gt;
</pre>
