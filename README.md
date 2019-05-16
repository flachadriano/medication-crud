# Medication

Hello, in this project the client need to control the medications of the Hospital.

So, it is necessary to create an application that helps the user with this need.

## User Requirements

1. The application must allow to add medication with the field Name, Dosage, Due date;

1. The application must allow to view all the medications created;

1. The application must allow the user to edit a medication, making possible to change any of the fields.

## Technologic Requirements

1. The application must be created using a frontend framework (non specific framework required, further on jQuery);

1. The application must not persist the records on backend;

1. The grid mode must be a component, the columns must be rendered based in an array, similar to this: [{field: 'name', label: 'Name'}, {field: 'dosage', label: 'Dosage'}, {field: 'due_date', label: 'Due date'}]. If more configuration is needed you can add it. This array must be received as parameter by the component.

## Expected result

### Grid mode
After the user create the medication records, the grid result must be something similar to the below image.

Interactions:
- When the user click on "Add" button, the grid must be hidden, and display the detail mode, to the user create a new record;
- When the user click on "View" button, the grid must be hidden, and display the detail mode, with the data of the selected record;
- When the user click on "Delete" button, the selected record must be deleted from the list, and reload the list.

![grid](https://github.com/flachadriano/medication-crud/blob/master/grid.png)

### Detail mode
When the user need to change or view more info of a record

Obs:
- It is not mandatory to add a calendar selection to set the date
- The Dosage options must be: ml, tablet, pill 

![form](https://github.com/flachadriano/medication-crud/blob/master/form.png)

## How to create it

1. Do a fork of the project;

1. Implement the application on your fork;

1. Create a pull-request with the final project




# Português

Olá, neste projeto o cliente necessita de um controle de medicamentos para um hospital.

Então, é necessário criar uma aplicação para auxiliar nesta necessidade.

## Requisitos do usuário

1. A aplicação deve permitir o cadastro de um medicamento com os campos Nome, Dosagem, Vencimento;

1. A aplicação deve permitir o usuário visualizar um medicamento criado;

1. A aplicação deve permitir o usuário editar um medicamento, permitindo alterar qualquer campo;.

## Requisitos tecnológicos

1. A aplicação deve ser criada utilizando um framework frontend, a exceção do JQuery (nenhum framework específico);

1. A aplicação não deve persistir dados no backend;

1. A grid apresentada na visualização em modo grid deve ser um componente, as colunas devem ser renderizadas baseado em um array similar a este: [{field: 'name', label: 'Name'}, {field: 'dosage', label: 'Dosage'}, {field: 'due_date', label: 'Due date'}]. Podem ser adicionadas mais configurações, caso forem necessárias. Este array deve ser recebido como parâmetro pelo componente.

## Expected result

### Visualização em modo grid
Após o usuário criar um registro de medicamento, o modo grid deve apresentar algo similar a imagem abaixo.

Interações:
- Quando o usuário clicar no botão "Add", o modo grid deve ser oculto, e apresentar o modo detalhe, para que o usuário adicione um registro;
- Quando o usuário clicar no botão "View", o modo grid deve ser oculto, e apresentar o modo detalhe, apresentando os dados do registro selecionado;
- Quando o usuário clicar no botão "Delete", o registro selecionado deve ser removido da lista e a lista deve ser atualizada..

![grid](https://github.com/flachadriano/medication-crud/blob/master/grid.png)

### Visualização em modo detalhe
Quando o usuário necessário verificar os dados de um registro ou alterar.

Obs:
- Não é obrigatório adicionar um calendário para selecionar a data;
- A dosagem deve conter as seguintes opções: ml, tablet, pill 

![form](https://github.com/flachadriano/medication-crud/blob/master/form.png)

## Como criar

1. Faça o fork deste projeto;

1. Implemente a aplicação no seu fork;

1. Crie um pull-request com o resultado do projeto.
