import React from 'react'
import styled from 'styled-components';
import TableNameInput from './tableNameInput';
import TableField from './tableField';
import TableInput from './tableInput';
import Draggable from 'react-draggable';

const CustomTable = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.14);
  height: auto;
  margin: 0 auto;
  min-width: 550px;
  max-width: 1000px;
  position: relative;
  background-color: white;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.12);
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;


const TableHeader = styled.div`
    height: 30px;
    width: 100%;
    background: rgba(50,67,83,1);
`;

const FadeThePage = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 9999;
  background: rgba(90, 90, 90, 0.5);
`

function TableForm({ 
  setPopUp,
  setTables,
  setSelectedTable,
  selectedTable,
  tableIndexState,
  setTableIndexState
}) {
  //Creating Table Inputs (these are fields)
  const fieldInputs = [];
  const createTableInputs = () => {
    const fields = Object.keys(selectedTable.fields)
    for (let i = 0; i < fields.length; i++) {
      fieldInputs.push(<TableInput field={selectedTable.fields[i]} key={i} />)
    }
  }
  createTableInputs();

  return (
    <FadeThePage>
      <Draggable handle="#header">
        <CustomTable>
          <TableHeader id="header" style={{ cursor: "move" }} />
          <TableNameInput setPopUp={setPopUp} name={selectedTable.type}/>
          <Table id='table' >
            <tbody>
              <TableField />
              {fieldInputs}
            </tbody>
          </Table>
        </CustomTable>
      </Draggable>
    </FadeThePage>
  )
}


export default TableForm;