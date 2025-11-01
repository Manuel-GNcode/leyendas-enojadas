const $btnRules = document.getElementById('btn-rules');

$btnRules.addEventListener('click', ()=>{
  const enlace = document.createElement("a");
  enlace.href = "/docs/instrucciones_leyendas_enojadas.pdf";
  enlace.download = "instrucciones_leyendas_enojadas.pdf";
  enlace.click();
})