/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

//  export * from "@jest/types"
export * from "jest-get-type";
export * from "@jest/expect-utils";
//  export * from "jest-matcher-utils"
export * from "pretty-format";
export * from "diff-sequences";
export * from "jest-diff";
export * from "jest-message-util";
export * from "expect";
export * from "jest-mock";
export * from "jest-circus";

import {fn, spyOn, mocked, replaceProperty, } from 'jest-mock';

export default {fn, spyOn, mocked, replaceProperty};