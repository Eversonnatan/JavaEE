/**
 *  Confirmação de exclusão de um  contato
 * @author Everson dos Santos
 * @param  idcon 
 */

 function confirmar(idcon){
	let rersposta = confirm("Confirma a exclusão dese contato?")
	if (rersposta === true){
		window.location.href = "delete?idcon=" + idcon
	} 
 }