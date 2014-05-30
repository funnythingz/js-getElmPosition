# js-getElmPosition

## Howto

- getElmPosition(elm).top
- getElmPosition(elm).left

## Reference

DOM

```html
<div>
  parent
  <div id="hoge">hoge</div>
</div>
```

JS

```javascript
getElmPosition(document.getElementById('hoge')).top;
```

Example

```html
<!Doctype html>
<html><body>
<div>
  parent
  <div id="hoge">hoge</div>
</div>
<script src="get_elm_position.js"></script>
<script>
alert(getElmPosition(document.getElementById('hoge')).top);
</script>
</body></html>
```
