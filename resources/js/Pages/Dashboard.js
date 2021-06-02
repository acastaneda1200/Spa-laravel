
import Authenticated from '@/Layouts/Authenticated';
import React from 'react';
import {Form} from '../Components/form/Form'

export default function Dashboard(props) {
    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                 <Form />
                </div>
            </div>
        </Authenticated>    
    );
}
