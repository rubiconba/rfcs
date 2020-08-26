module.exports = {
  rules: {
    /*
     * Require that member overloads be consecutive
     * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/adjacent-overload-signatures.md
     */
    '@typescript-eslint/adjacent-overload-signatures': 'error',

    /*
     * Requires using either T[] or Array<T> for arrays
     * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/array-type.md
     */
    '@typescript-eslint/array-type': ['error', { default: 'generic' }],

    /*
     * Disallows awaiting a value that is not a Promise
     * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/await-thenable.md
     */
    '@typescript-eslint/await-thenable': 'error',

    /*
     * Bans specific types from being used
     * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/ban-types.md
     */
    '@typescript-eslint/ban-types': [
      'error',
      {
        types: {
          Array: null,
          Object: 'Use {} instead',
          String: {
            message: 'Use string instead',
            fixWith: 'string',
          },
        },
      },
    ],

    /*
     * Enforce consistent brace style for blocks
     * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/brace-style.md
     */
    'brace-style': 'off',
    '@typescript-eslint/brace-style': ['error'],

    /*
     * Enforces consistent usage of type assertions
     * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/consistent-type-assertions.md
     */
    '@typescript-eslint/consistent-type-assertions': [
      'error',
      {
        assertionStyle: 'as',
        objectLiteralTypeAssertions: 'allow',
      },
    ],

    /*
     * Consistent with type definition either
     * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/consistent-type-definitions.md
     */
    '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],

    /*
     * Require explicit return types on functions and class methods
     * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/explicit-function-return-type.md
     */
    '@typescript-eslint/explicit-function-return-type': [
      2,
      { allowExpressions: true },
    ],

    /*
     * Require explicit accessibility modifiers on class properties and methods
     * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/explicit-member-accessibility.md
     */
    '@typescript-eslint/explicit-member-accessibility': 'off',

    /*
     * Require or disallow spacing between function identifiers and their invocations
     * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/func-call-spacing.md
     */
    'func-call-spacing': 'off',
    '@typescript-eslint/func-call-spacing': ['error'],

    /*
     * Enforces naming of generic type variables
     * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/generic-type-naming.md
     *
     */
    '@typescript-eslint/generic-type-naming': 'off',

    /*
     * Enforce consistent indentation
     * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/indent.md
     */
    indent: 'off',
    '@typescript-eslint/indent': ['error', 2],

    /*
     * Require a specific member delimiter style for interfaces and type literals
     * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/member-delimiter-style.md
     */
    '@typescript-eslint/member-delimiter-style': [
      'error',
      {
        multiline: {
          delimiter: 'semi',
          requireLast: true,
        },
        singleline: {
          delimiter: 'semi',
          requireLast: false,
        },
      },
    ],

    /*
     * Enforces naming conventions for class members by visibility
     * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/member-naming.md
     */
    '@typescript-eslint/member-naming': 'off',

    /*
     * Require a consistent member declaration order
     * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/member-ordering.md
     */
    '@typescript-eslint/member-ordering': 'error',

    /*
     * Disallow generic Array constructors
     * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-array-constructor.md
     */
    'no-array-constructor': 'off',
    '@typescript-eslint/no-array-constructor': 'error',

    /*
     * Disallow Empty Functions
     * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-empty-function.md
     */
    'no-empty-function': 'off',
    '@typescript-eslint/no-empty-function': 'error',

    /*
     * Disallow the declaration of empty interfaces
     * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-empty-interface.md
     */
    '@typescript-eslint/no-empty-interface': [
      'error',
      {
        allowSingleExtends: false,
      },
    ],

    /*
     * Disallow the declaration of empty interfaces
     * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-empty-interface.md
     */
    '@typescript-eslint/no-empty-interface': [
      'error',
      {
        allowSingleExtends: false,
      },
    ],

    /*
     * Disallow usage of the any type
     * https://github.com/typescript-eslint/typescript-eslint/blob/v1.6.0/packages/eslint-plugin/docs/rules/no-explicit-any.md
     */
    '@typescript-eslint/no-explicit-any': 'error',

    /*
     * Disallow unnecessary parentheses
     * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-extra-parens.md
     */
    'no-extra-parens': 'off',
    '@typescript-eslint/no-extra-parens': 'error',

    /*
     * Forbids the use of classes as namespaces
     * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-extraneous-class.md
     */
    '@typescript-eslint/no-extraneous-class': 'error',

    /*
     * Requires Promise-like values to be handled appropriately
     * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-floating-promises.md
     */
    '@typescript-eslint/no-floating-promises': 'error',

    /*
     * Disallow iterating over an array with a for-in loop
     * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-for-in-array.md
     */
    '@typescript-eslint/no-for-in-array': 'error',

    /*
     * Disallows explicit type declarations for variables or parameters initialized to a number, string, or boolean
     * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-inferrable-types.md
     */
    '@typescript-eslint/no-inferrable-types': [
      'error',
      {
        ignoreParameters: false,
        ignoreProperties: false,
      },
    ],

    /*
     * Disallow Magic Numbers
     * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-magic-numbers.md
     */
    'no-magic-numbers': 'off',
    '@typescript-eslint/no-magic-numbers': [
      'error',
      { ignoreNumericLiteralTypes: true },
    ],

    /*
     * Enforce valid definition of new and constructor
     * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-misused-new.md#enforce-valid-definition-of-new-and-constructor-no-misused-new
     */
    '@typescript-eslint/no-misused-new': 'error',

    /*
     * Avoid using promises in places not designed to handle them
     * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-misused-promises.md
     */
    '@typescript-eslint/no-misused-promises': 'off',

    /*
     * Disallow the use of custom TypeScript modules and namespaces
     * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-namespace.md
     */
    '@typescript-eslint/no-namespace': [
      'error',
      { allowDeclarations: false, allowDefinitionFiles: false },
    ],

    /*
     * Disallows non-null assertions using the ! postfix operator
     * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-non-null-assertion.md
     */
    '@typescript-eslint/no-non-null-assertion': 'error',

    /*
     * Disallow the use of parameter properties in class constructors
     * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-parameter-properties.md
     */
    '@typescript-eslint/no-parameter-properties': 'error',

    /*
     * Disallows invocation of require()
     * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-require-imports.md
     */
    '@typescript-eslint/no-require-imports': 'error',

    /*
     * Disallow aliasing this
     * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-this-alias.md
     */
    '@typescript-eslint/no-this-alias': 'error',

    /*
     * Disallow the use of type aliases
     * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-type-alias.md#disallow-the-use-of-type-aliases-no-type-alias
     */
    '@typescript-eslint/no-type-alias': 'off',

    /*
     * Condition expressions must be necessary
     * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unnecessary-condition.md
     */
    '@typescript-eslint/no-unnecessary-condition': ['error'],

    /*
     * Warns when a namespace qualifier is unnecessary
     * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unnecessary-qualifier.md
     */
    '@typescript-eslint/no-unnecessary-qualifier': 'error',

    /*
     * Enforces that types will not to be used
     * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unnecessary-type-arguments.md
     */
    '@typescript-eslint/no-unnecessary-type-arguments': 'off',

    /*
     * Warns if a type assertion does not change the type of an expression
     * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unnecessary-type-assertion.md
     */
    '@typescript-eslint/no-unnecessary-type-assertion': 'error',

    /*
     * Disallow unused variables
     * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unused-vars.md
     */
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'after-used',
        ignoreRestSiblings: false,
      },
    ],

    /*
     * Disallow the use of variables before they are defined
     * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-use-before-define.md
     */
    '@typescript-eslint/no-use-before-define': [
      'error',
      { functions: true, classes: true },
    ],

    /*
     * Disallow unnecessary constructors
     * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-useless-constructor.md
     */
    'no-useless-constructor': 'off',
    '@typescript-eslint/no-useless-constructor': 'error',

    /*
     * Disallows the use of require statements except in import statements
     * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-var-requires.md
     */
    '@typescript-eslint/no-var-requires': 'error',

    /*
     * Use for-of loops instead of standard for loops over arrays
     * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-for-of.md
     */
    '@typescript-eslint/prefer-for-of': 'error',

    /*
     * Use function types instead of interfaces with call signatures
     * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-function-type.md
     */
    '@typescript-eslint/prefer-function-type': 'error',

    /*
     * Enforce includes method over indexOf method
     * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-includes.md
     */
    '@typescript-eslint/prefer-includes': 'error',

    /*
     * Require the use of the namespace keyword instead of the module keyword to declare custom TypeScript modules.
     * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-namespace-keyword.md
     */
    '@typescript-eslint/prefer-namespace-keyword': 'error',

    /*
     * Require never-modified private members be marked as redonly
     * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-readonly.md
     */
    '@typescript-eslint/prefer-readonly': 'error',

    /*
     * Enforce to use RegExp#exec over String#match
     * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-regexp-execd.md
     */
    '@typescript-eslint/prefer-regexp-exec': 'error',

    /*
     * Enforce the use of String#startsWith and String#endsWith instead of other equivalent methods of checking substrings
     * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-string-starts-ends-with.md
     */
    '@typescript-eslint/prefer-string-starts-ends-with': 'error',

    /*
     * Functions that return promises must be async
     * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/promise-function-async.md
     */
    '@typescript-eslint/promise-function-async': [
      'error',
      {
        allowedPromiseNames: ['Thenable'],
        checkArrowFunctions: true,
        checkFunctionDeclarations: true,
        checkFunctionExpressions: true,
        checkMethodDeclarations: true,
      },
    ],

    /*
     * Enforce the consistent use of either backticks, double, or single quotes
     * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/quotes.md
     */
    quotes: 'off',
    '@typescript-eslint/quotes': ['error', 'single'],

    /*
     * Enforce giving compare argument to Array#sort
     * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/require-array-sort-compare.md
     */
    '@typescript-eslint/require-array-sort-compare': 'error',

    /*
     * Disallow async functions which have no await expression
     * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/require-await.md
     */
    'require-await': 'off',
    '@typescript-eslint/require-await': 'error',

    /*
     * When adding two variables, operands must both be of type number or of type string
     * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/restrict-plus-operands.md
     */
    '@typescript-eslint/restrict-plus-operands': 'error',

    /*
     * Require or disallow semicolons instead of ASI
     * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/semi.md
     */
    semi: 'off',
    '@typescript-eslint/semi': 'error',

    /*
     * Boolean expressions are limited to booleans
     * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/strict-boolean-expressions.md
     */
    // '@typescript-eslint/strict-boolean-expressions': [
    //   'error',
    //   { allowNullable: false, ignoreRhs: false },
    // ],
    '@typescript-eslint/strict-boolean-expressions': ['error'],
    /*
     * Sets preference level for triple slash directives versus ES6-style import declarations
     * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/triple-slash-reference.md
     */
    '@typescript-eslint/triple-slash-reference': 'error',

    /*
     * Require consistent spacing around type annotations
     * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/type-annotation-spacing.md
     */
    '@typescript-eslint/type-annotation-spacing': [
      'error',
      { before: false, after: true },
    ],

    /*
     * Require type annotations to exist
     * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/typedef.md
     * TODO: Maybe turn on
     */
    '@typescript-eslint/typedef': 'off',

    /*
     * Enforces unbound methods are called with their expected scope
     * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/unbound-method.md
     */
    '@typescript-eslint/unbound-method': [
      'error',
      {
        ignoreStatic: true,
      },
    ],

    /*
     * Warns for any two overloads that could be unified into one by using a union or an optional/rest parameter.
     * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/unified-signatures.md
     */
    '@typescript-eslint/unified-signatures': 'error',
  },
};
