# instalador_single_oficial
 
 FAZENDO DOWNLOAD DO INSTALADOR & INICIANDO A PRIMEIRA INSTALAÇÃO (USAR SOMENTE PARA PRIMEIRA INSTALAÇÃO):

```bash
sudo apt install -y git && git clone https://github.com/equipechat-2-0/instalador_equipechat_oficial && sudo chmod -R 777 instalador_equipechat_oficial && cd instalador_equipechat_oficial && sudo chmod -R 775 atualizador_remoto.sh && sudo ./instalador_equpechat.sh
```

Caso for Rodar novamente, apenas execute como root:
```bash 
cd /root/instalador_equipechat_oficial  && git reset --hard && git pull &&  sudo chmod -R 775 instalador_equipechat.sh &&  sudo chmod -R 775 atualizador_remoto.sh && sudo chmod -R 775 instalador_apioficial.sh &&./instalador_equipechat.sh
```

Todos os Direitos Reservados. Proibida qualquer tipo de Copia deste Auto Instalador.
