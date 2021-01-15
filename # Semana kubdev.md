# Semana kubdev

## Containeres

### Semelhanças dos containeres docker com os físicos
- Uniformidade: Containeres físicos podem ser trasportados por navios e caminhões por conta disso
- Vendo por fora vc não tem a menor ideia do que tem dentro até abrí-lo

Com containeres, podemos realizar processos de forma independente, sem se preocupar com conflitos de configurações ou ferramental.

Podemos fazer qualquer coisa com container, de banco de dados a aplicações.

Com container temos um padrão de execução, ou seja, podemos executar em qualquer lugar que suporte conteineres.

### Conteinerização x Virtualização

- Virtualiação: tem como base a estrutura. Acima disso temos a virtualização. E por cima disso temos a infra virtual e por cima disso temos os SO. Pra cada máquina virtual, precisamos ter um sistema operacional e um recurso que o sistema operacional vai consumir.
- Conteinerização: temos a infra, o SO e o conteiner runtime, onde ficam a execução dos processos, todos sendo executados de forma isolada e conversando entre si somente se quisermos.

## Arquitetura kubernetes

O kubernetes é formado por um cluster, um conjunto de máquinas onde cada uma delas vai exercer um dos dois papéis possíveis: Control Plane e Node.

- Node: executa os containeres
- Control Plane: gerencia os containeres e orquestra o cluster. No entanto para garantir auta disponibilidade do cluster, é necessário ter mais de um control plane, se um cai, o outro continua os serviços

### Control Plane
- Kube API Server: recebe a comunicação com o cluster
- ETCD: banco chave e valor, armazena todos os dados do kubernetes
- Kube Scheduler: organiza onde o processo será executado
- Kube Control Manager: executa e gerencia todos os controladores do kubernetes

### Kunertnetes Nodes
- Kubelet: monitora a execução dos containeres e interage com o API Servers
- Kube Proxy: responsável pelas comunicações de rede com o cluster
- Container Runtime Interface: as especificações necessárias para ue um container runtime possa executar os conteineres