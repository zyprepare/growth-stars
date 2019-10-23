module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'build', // 主要目的是修改项目构建系统(例如 glup，webpack，rollup 的配置等)的提交
        'ci', // 主要目的是修改项目继续集成流程(例如 Travis，Jenkins，GitLab CI，Circle等)的提交
        'docs', // 文档更新
        'feat', // 新增功能
        'fix', // bug 修复
        'perf', // 性能优化
        'base', // 一般用于项目架构和基础设施建设方面的提交
        'refactor', // 重构代码(既没有新增功能，也没有修复 bug)
        'revert', // 回滚某个更早之前的提交
        'style',
        'test',
        'chore' // 不属于以上类型的其他类型
      ]
    ],
    'subject-full-stop': [0, 'never'],
    'subject-case': [0, 'never']
  }
};
