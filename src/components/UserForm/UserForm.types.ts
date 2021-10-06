import {
	FetchResult,
	MutationFunctionOptions,
	OperationVariables,
} from '@apollo/client'
import { AuthType } from '../../types/auth.enum'

export interface UserFormProps {
	formType: FormType
	action: (
		options?: MutationFunctionOptions<any, OperationVariables> | undefined
	) => Promise<FetchResult<any, Record<string, any>, Record<string, any>>>
}

export interface FormProps {
	username?: string
	email?: string
	password?: string
}

export type FormType = AuthType.SIGN_IN | AuthType.SIGN_UP
