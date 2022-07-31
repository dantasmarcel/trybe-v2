##Agora a prática!


1. No [Docker Hub](https://hub.docker.com/), utilizando a caixa de busca ("Search for great content"), busque pela imagem da Distribuição Linux Debian.
```
https://hub.docker.com/search?q=debian
```
2. Uma vez que encontrar a imagem oficial, acesse-a (clicando em seu card) e verifique na página de detalhes. Confira se existe algum comando para baixar a imagem localmente sem ter que criar um container para isso.
```
docker pull debian
```
3. Baixe a imagem utilizando a tag: stable-slim, que é uma versão reduzida da distribuição.
```
docker pull debian:stable-slim
```
4. Após baixar a imagem para seu computador local, crie e execute um container no modo interativo utilizando essa imagem como referência — não esqueça referenciar a tag.
```
docker run -it debian:stable-slim
```
5. No terminal, você deve conseguir rodar o comando cat /etc/*-release, que vai retornar os dados da distribuição Debian que está sendo rodada dentro do container.
```
oot@6984410e62b4:/# cat /etc/*-release
PRETTY_NAME="Debian GNU/Linux 11 (bullseye)"
NAME="Debian GNU/Linux"
VERSION_ID="11"
VERSION="11 (bullseye)"
VERSION_CODENAME=bullseye
ID=debian
HOME_URL="https://www.debian.org/"
SUPPORT_URL="https://www.debian.org/support"
BUG_REPORT_URL="https://bugs.debian.org/"
root@6984410e62b4:/# 
```

6. Encerre o terminal.
```
exit
```
7. Verifique na sua lista de containers qual container se refere ao exercício que acabou de praticar.
```

```
8. Inicie o mesmo container novamente, sem criar outro. Valide se ele está ativo na lista de containers.
9. Retome o container que foi criado anteriormente neste exercício.
10. Rode o comando cat /etc/debian_version que deve retornar a versão atual do sistema do container.
11. Encerre o terminal.
12. Remova somente o container criado para esse exercício.
[BÔNUS] Crie e rode de modo interativo em modo 'Cleanup', a imagem andrius/ascii-patrol.
[BÔNUS] **Encerre o container utilizando os botões [ctrl] + [c].
