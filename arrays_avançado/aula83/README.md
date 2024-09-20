Para concatenar arrays, somar eles não vai dar certo
a1=[1,2,3]
a2=[4,5,6]
a3=a1+a2 -> não vai dar certo, o correto é usar o método concat:
a3= a1.concat(a2)

se quiser, dá para colocar mais coisas junto: a3=a1.concat(a2, [23,54,6441], 'luiz')

Posso usar o spread também:
a3=[...a1, ...a2,'luiz',...[3,123,21]]