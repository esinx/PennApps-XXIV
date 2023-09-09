import path from 'path'

import * as cdk from 'aws-cdk-lib'
import * as apigateway from 'aws-cdk-lib/aws-apigateway'
import * as lambda from 'aws-cdk-lib/aws-lambda'
import { Construct } from 'constructs'

interface BackendServiceStackProps extends cdk.StackProps {
	baseId: string
	service?: {
		basePath?: string
		environment?: Record<string, string>
		withWarmer?: boolean
	}
}

export class BackendServiceStack extends cdk.Stack {
	constructor(scope: Construct, id: string, props: BackendServiceStackProps) {
		super(scope, id, props)
		const { baseId, service } = props
		const { environment, basePath, withWarmer = true } = service ?? {}

		const handler = new lambda.Function(this, `lambda:${baseId}`, {
			runtime: lambda.Runtime.NODEJS_18_X,
			code: lambda.Code.fromAsset(
				path.resolve(
					__dirname,
					'..',
					'..',
					'services',
					'backend',
					'build.lambda',
				),
			),
			handler: 'index.handler',
			memorySize: 512,
			timeout: cdk.Duration.seconds(90),
			environment,
			functionName: baseId.replace(/\./g, '-'),
		})

		const api = new apigateway.LambdaRestApi(this, `api:${baseId}`, {
			handler,
			proxy: true,
			deploy: true,
			disableExecuteApiEndpoint: true,
			integrationOptions: {
				allowTestInvoke: false,
			},
		})
	}
}
