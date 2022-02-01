import React from 'react';
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useDispatch, useSelector} from 'react-redux';
import {fetchByMale, fetchByFemale} from "./fetchUsers";

function Users() {

  const dispatch = useDispatch();
  const users = useSelector(state => state.users);
  const dispatchMale = () => dispatch(fetchByMale());
  const dispatchFemale = () => dispatch(fetchByFemale());

  return (
      <div>
        <Tabs>
          <TabList>
            <Tab onClick={dispatchMale}>Male</Tab>
            <Tab onClick={dispatchFemale}>Female</Tab>
          </TabList>
          <TabPanel>
          <table>
               <tbody>
               {users.map(u =>
                   <tr key={u.id.value}>
                       <td><img src={u.picture.medium}></img></td>
                       <td>{u.name.first}</td>
                       <td>{u.name.last}</td>
                       <td>{u.dob.age}</td>
                       <td>{u.gender}</td>
                       <td>{u.email}</td>
                   </tr>
               )}
               </tbody>
           </table>
          </TabPanel>
          <TabPanel>
          <table>
               <tbody>
               {users.map(u =>
                   <tr key={u.id.value}>
                       <td><img src={u.picture.medium}></img></td>
                       <td>{u.name.first}</td>
                       <td>{u.name.last}</td>
                       <td>{u.dob.age}</td>
                       <td>{u.gender}</td>
                       <td>{u.email}</td>
                   </tr>
               )}
               </tbody>
           </table>
          </TabPanel>
        </Tabs>
      </div>
  );
}

export default Users;