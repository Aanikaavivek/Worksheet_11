<!DOCTYPE html>
<html>
<body>
<script>
<h1 onmouseover="style.color='red'" onmouseout="style.color='black'">Hello</h1>
function bigImg(x) {
  x.style.height = "64px";
  x.style.width = "64px";
}

function normalImg(x) {
  x.style.height = "32px";
  x.style.width = "32px";
}
</script>

<img onmouseover="bigImg(this)" onmouseout="normalImg(this)" border="0" src="star.png" alt="star" width="32" height="32">
</html>
</body>

