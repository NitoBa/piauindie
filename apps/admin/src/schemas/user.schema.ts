import { list } from '@keystone-6/core'
import { allowAll } from '@keystone-6/core/access'
import {
  password,
  text,
  timestamp,
  select,
  relationship,
} from '@keystone-6/core/fields'
import { isAdmin, isStudent } from '../auth/permissions'
import { validationURLs } from '../utils/regexs'

export const userSchema = list({
  access: {
    operation: {
      create: isAdmin,
      delete: isAdmin,
      query: allowAll,
      update: isAdmin || isStudent,
    },
  },
  fields: {
    name: text({ validation: { isRequired: true } }),
    email: text({
      validation: { isRequired: true },
      isIndexed: 'unique',
    }),
    avatarUrl: text({
      db: { isNullable: true },
      validation: {
        isRequired: false,

        match: {
          regex: validationURLs,
          explanation: 'Must be a valid URL',
        },
      },
    }),
    role: select({
      type: 'enum',
      options: [
        { label: 'isAdmin', value: 'admin' },
        { label: 'isStudent', value: 'student' },
        { label: 'isTeacher', value: 'teacher' },
      ],
      validation: { isRequired: true },
      ui: { displayMode: 'select' },
      defaultValue: 'student',
    }),
    password: password({
      validation: { isRequired: true },
    }),

    enrollments: relationship({ ref: 'Enrollment.student', many: true }),
    teachingIn: relationship({ ref: 'Course.teacher', many: true }),

    createdAt: timestamp({
      defaultValue: { kind: 'now' },
    }),
  },
  ui: { label: 'Users', isHidden: isStudent },
  db: { map: 'users' },
})
