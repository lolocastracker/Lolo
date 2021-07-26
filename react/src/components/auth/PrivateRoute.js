import { useKeycloak } from '@react-keycloak/web';
import React from 'react';
import { Redirect, Route } from 'react-router-dom';


export function PrivateRoute({ component: Component, roles, ...rest }) {
    const { keycloak } = useKeycloak()
    let data=rest.data

    const isAutherized = (roles) => {
        if (keycloak && roles) {
            return roles.some(r => {
                const realm =  keycloak.hasRealmRole(r);
                const resource = keycloak.hasResourceRole(r);
                return realm || resource;
            });
        }
        return false;
    }

    return (
        <Route {...rest}>
        {isAutherized(roles)? <Component data={data}/> : <Redirect to={{ pathname: '/', }} />}

        </Route>
     
    )
}