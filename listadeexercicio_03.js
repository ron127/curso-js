/*
3) Elabore um algoritimo que calcule o que deve ser pago por um produto, o preço de etiqueta
e a escolha da condição de pagamento.
Utilize os códigos da tabela a seguir para ler qual a condição de escolha r efetuar p calcuço 
adequado.

Codigo condição de pagamento;
1 - Á vista Débito, recebe 10& de desconto;
2 - Á vista no Dinheiro ou pix, recebe 15% de desconto:
3 - Em duas vezes, preço normal de etiqueta sem juros;
4 - acima de duas vezes, preço normal de etiqueta mais juros de 10%;
*/ 
const precoEtiqueta = 100;
const fornaDePagamento = 4;

if (fornaDePagamento === 1) {
    console.log(precoEtiqueta  - ( precoEtiqueta* 0.1));
} else if(fornaDePagamento === 2) {
    console.log(precoEtiqueta - (precoEtiqueta * 0.15));
} else if(fornaDePagamento === 3) {
    console.log(precoEtiqueta);
}else{
    console.log(precoEtiqueta + (precoEtiqueta * 0.1));
}
