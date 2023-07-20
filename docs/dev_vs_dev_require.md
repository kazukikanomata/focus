## Difference Between require and require_dev:

### require:

> - It define actual dependency as well as package version.
> - The require lists the package require by this package.
> - The package will not be installed unless those requirements can be met.

開発プロジェクトとして必要なパッケージが挙げられる。
要件が満たされない限りインストールされない

### require_dev:

> - It define the packages necessary for developing project.
> - The require_dev lists packages required for developing this package, or running tests, etc.
> - The dev requirements of the root package are installed by default. Both install or update support the “–no-dev” option that prevents dev dependencies from being installed.

開発プロジェクトとして必要なやつなんかな。
開発やテストの実行などに必要なパッケージをリスト化する


### URL
https://www.geeksforgeeks.org/difference-between-require-dev-and-require-in-php/