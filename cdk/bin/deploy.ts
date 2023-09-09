#!/usr/bin/env node
import dotenv from 'dotenv'

import fs from 'fs/promises'
import path from 'path'

import * as cdk from 'aws-cdk-lib'

import 'source-map-support/register'

import { BackendServiceStack } from '../lib/backend'

dotenv.config()

const {
	PROJECT_IDENTIFIER,
	SES_EMAIL,
	HOSTED_ZONE_ID,
	AWS_REGION,
	CDK_DEFAULT_REGION,
} = process.env

const main = async () => {
	const app = new cdk.App()
	new BackendServiceStack(app, 'backend', {
		stackName: 'BackendService',
		baseId: `${PROJECT_IDENTIFIER}.backend`,
	})
}

main()
