import { CognitoUserPool } from 'amazon-cognito-identity-js';
import UserPool from './user_pool.jsx';
const poolData = {
    UserPoolId: 'us-east-2_Ssy4ScgNZ',
    ClientId: '2vbeg443vsau2qikjod51a5tkm'
}

export default new CognitoUserPool(poolData);