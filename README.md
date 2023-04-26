# 代码提交规范
>
> `npm run commit`

| Type     | 作用                                                                                   |
| -------- | -------------------------------------------------------------------------------------- |
| feat     | 新增特性 (feature)                                                                     |
| fix      | 修复 Bug(bug fix)                                                                      |
| docs     | 修改文档 (documentation)                                                               |
| style    | 代码格式修改(white-space, formatting, missing semi colons, etc)                        |
| refactor | 代码重构(refactor)                                                                     |
| perf     | 改善性能(A code change that improves performance)                                      |
| test     | 测试(when adding missing tests)                                                        |
| build    | 变更项目构建或外部依赖（例如 scopes: webpack、gulp、npm 等）                           |
| ci       | 更改持续集成软件的配置文件和 package 中的 scripts 命令，例如 scopes: Travis, Circle 等 |
| chore    | 变更构建流程或辅助工具(比如更改测试环境)                                               |
| revert   | 代码回退                                                                               |

# `controller` 命名规范

```bash
| -- controller/
| -- | -- login/
| -- | -- | -- types/
| -- | -- | -- | -- login-type.ts
| -- | -- | -- data/
| -- | -- | -- | -- login-data.ts
| -- | -- question/
```

1. 除 `home.ts` 外其他 `controller` 需包裹一个同名文件夹, 内有 **`types/`** 目录, 用于存放 `ts` 类型, **`data/`** 目录, 用于存放数据

2. `types/` 文件命名: `目录名 + -type.ts` (login-type.ts)

3. `data/` 文件命名: `目录名 + -data.ts` (login-data.ts)
