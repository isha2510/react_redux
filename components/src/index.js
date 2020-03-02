import React from 'react';
import ReactDOM from 'react-dom';
import ComponentDetails from './ComponentDetails';
import ApprovalCard from './ApprovalCard';
import faker from 'faker';
import ApprovalInfo from './ApprovalInfo';
const APP = () =>{
return (
    <div>
        <ApprovalCard>
            <ComponentDetails author="Isha" comment="Nice blog!" timeAgo="8:46" avatar={faker.image.avatar()}/>
            <ApprovalInfo author={faker.name.firstName()} avatar={faker.image.avatar()}></ApprovalInfo>
        </ApprovalCard>
        <ApprovalCard>
            <ComponentDetails author="Sagar" comment="Nice content!" timeAgo="6:46"avatar={faker.image.avatar()}/>
            <ApprovalInfo author={faker.name.firstName()} avatar={faker.image.avatar()}></ApprovalInfo>
        </ApprovalCard>
        <ApprovalCard>
            <ComponentDetails author="Rashmi" comment="Good work keep it up!" timeAgo="2:46"avatar={faker.image.avatar()}/>
            <ApprovalInfo author={faker.name.firstName()} avatar={faker.image.avatar()}></ApprovalInfo>
        </ApprovalCard>
    </div>
);
};
ReactDOM.render(<APP/> , document.getElementById('root'));
