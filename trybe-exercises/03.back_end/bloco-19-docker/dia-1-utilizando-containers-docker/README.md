## Agora a prática!


1. No [Docker Hub](https://hub.docker.com/), utilizando a caixa de busca ("Search for great content"), busque pela imagem da Distribuição Linux Debian.
```
https://hub.docker.com/search?q=debian
```
2. Visto que encontrou a imagem oficial, acesse-a e verifique na página de detalhes. Confira se existe algum comando para baixar a imagem localmente sem ter que criar um container para isso.
```
docker pull debian
```
3. Baixe a versão reduzida do Debian utilizando a tag <code>stable-slim</code>.
```
docker pull debian:stable-slim
```
4. Após baixar a imagem para seu computador local, crie e execute um container no modo interativo utilizando essa imagem como referência — não se esqueça de referenciar a tag.
```
docker run -it debian:stable-slim
```
5. No terminal, consiga rodar o comando <code>cat /etc/*-release</code>, que vai retornar os dados da distribuição Debian iniciada dentro do container.
```
root@6984410e62b4:/# cat /etc/*-release
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
7. Verifique na sua lista de containers qual deles se refere ao exercício que acabou de praticar.
```
docker container ls
```
8. Inicie o mesmo container novamente, sem criar outro. Valide se ele está ativo na lista de containers.
```
docker start <CONTAINER ID>
```
9. Retome o container que foi criado anteriormente neste exercício.
```
docker attach <CONTAINER ID>
```
10. Rode o comando <code>cat /etc/debian_version</code> que deve retornar a versão atual do sistema do container.
```
root@6984410e62b4:/# cat /etc/debian_version 
11.4
```
11. Encerre o terminal.
```
exit
```

12. Remova somente o container criado para esse exercício.
```
docker container rm <CONTAINER ID>
```
