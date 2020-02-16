import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListItem from './components/ListItem'
import NewTaskInput from './components/NewTaskInput';
import VListItem from './components/VListItem';
import VNewTaskInput from './components/VNewTaskinput';
import { Button } from 'react-bootstrap';



const App = props => {

  const [tasks, setTasks] = useState([]);

  function addNewTask(task) {
    const itensCopy = Array.from(tasks);
    itensCopy.push({ numero: tasks.length, produto: task });
    setTasks(itensCopy);
  }

  function updateTask({ target }, index) {
    const itensCopy = Array.from(tasks);
    itensCopy.splice(index, 1, { numero: index, produto: target.value });
    setTasks(itensCopy);
  }

  function deleteTask(index) {
    const itensCopy = Array.from(tasks);
    itensCopy.splice(index, 1);
    setTasks(itensCopy);
  }

  // Valor

  const [Vtasks, VsetTasks] = useState([]);

  function VaddNewTask(task) {
    const itensCopy = Array.from(Vtasks);
    itensCopy.push({ numero: Vtasks.length, valor: task });
    VsetTasks(itensCopy);
  }

  function VupdateTask({ target }, index) {
    const itensCopy = Array.from(Vtasks);
    itensCopy.splice(index, 1, { numero: index, valor: target.value });
    VsetTasks(itensCopy);
  }

  function VdeleteTask(index) {
    const itensCopy = Array.from(Vtasks);
    itensCopy.splice(index, 1);
    VsetTasks(itensCopy);
  }

  

  

  return (


    <div>






      <div id='contact' className='container-fluid bg-grey'>

        <h2 className='text-center'>SAMANA SALVADOR</h2>
        <div className='row'>



        <div className="mb-3">
                <div className="">
                  <NewTaskInput onSubmit={addNewTask} />
                  {tasks.map(({ numero, produto }, index) => (
                    <ListItem
                      key={numero}
                      value={produto}
                      onChange={(event) => updateTask(event, index)}
                      onDelete={() => deleteTask(index)}
                    />
                  ))}

                </div>
              </div>
                      

              <div className="mb-3">
                <div className="">
                  <VNewTaskInput onSubmit={VaddNewTask} />
                  {Vtasks.map(({ numero, valor }, index) => (
                    <VListItem
                      key={numero}
                      value={valor}
                      onChange={(event) => VupdateTask(event, index)}
                      onDelete={() => VdeleteTask(index)}
                    />
                  ))}

                </div>
              </div>



          <form id="gform" method="POST" class="pure-form pure-form-stacked" data-email="from_email@example.com"
            action="https://script.google.com/macros/s/AKfycbw0oI_x2Tch_q3dxpkQdKnG0E_YJIgIwyzwXYoPJw/exec">


            <div className='col-sm-7 '>
              <div className='row'>

                <div className='col-sm-6 form-group'>
                  <input className='form-control' id='cliente' name='cliente' placeholder='Cliente' type='text' required />
                </div>


                <div className='col-sm-6 form-group'>
                  <input className='form-control' id='Vendedor' name='Vendedor' placeholder='Vendedor' type='text' required />
                </div>

                <div className='col-sm-6 form-group'>
                  <input className='form-control' id='Telefone' name='Telefone' placeholder='Telefone' type='text' required />
                </div>

                <div className='col-sm-6 form-group'>
                  <input className='form-control' id='endereco' name='endereco' placeholder='Endereço' type='text' required />
                </div>

                <div className='col-sm-6 form-group'>
                  <input className='form-control' id='Estado' name='Estado' placeholder='Estado' type='text'  />
                </div>

                <div className='col-sm-6 form-group'>
                  <input className='form-control' id='Cidade' name='Cidade' placeholder='Cidade' type='text'  />
                </div>

                <div className='col-sm-6 form-group'>
                  <input className='form-control' id='Número' name='Número' placeholder='Número' type='text'  />
                </div>

                <div className='col-sm-6 form-group'>
                  <input className='form-control' id='Complemento' name='Complemento' placeholder='Complemento' type='text'  />
                </div>

                <div className='col-sm-6 form-group'>
                  <input className='form-control' id='cjpj' name='cnpj' placeholder='CNPJ' type='text' placeholder='00000000000000' />
                </div>

                <div className='col-sm-6 form-group'>
                  <input className='form-control' id='cpff' name='cpf' placeholder='CPF' type='text' laceholder='00000000000' />
                </div>

                <div className='col-sm-6 form-group'>
                  <input className='form-control' id='endereco' name='endereco' placeholder='Endereço' type='text' required />
                </div>


                <div className='col-sm-6 form-group'>
                  <input className='form-control' id='email' name='email' placeholder='Email' type='email' required placeholder='email@examplo.com' />
                </div>

          
              <div>
          <div className='col-sm-6 form-group'>
            
                  <input className='form-control' id='produtos' name='Produtos' value={JSON.stringify(tasks, null, 4)} />
                </div>

                            <div className='col-sm-6 form-group'>
                  <input className='form-control' id='valor' name='valor' type="nunber" value={JSON.stringify(Vtasks, null, 4)} />
                </div>
                
                </div>
          
            

              <div className='col-sm-12 form-group'>
                <button className='primary' type='submit'>Enviar</button>

              </div>

            </div>
        </div>
        </form>



        <script data-cfasync="false" type="text/javascript"
          src="https://cdn.rawgit.com/dwyl/learn-to-send-email-via-google-script-html-no-server/master/form-submission-handler.js"></script>

      </div>
    </div>
    
          
            
    </div >

  )
}

export default App;
