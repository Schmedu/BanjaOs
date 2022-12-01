#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { BanjaOsStack } from '../lib/banjs-os-stack'

const app = new cdk.App()
new BanjaOsStack(app, 'BanjOsStack', {
    env: {
        account: process.env.BANJA_OS_AWS_ACCOUNT,
        region: process.env.BANJA_OS_AWS_REGION
    }
})
