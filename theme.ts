import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin'

export const posterpickerTheme: CustomThemeConfig = {
	name: 'posterpicker',
	properties: {
		// =~= Theme Properties =~=
		'--theme-font-family-base': `system-ui`,
		'--theme-font-family-heading': `Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
		'--theme-font-color-base': '0 0 0',
		'--theme-font-color-dark': '255 255 255',
		'--theme-rounded-base': '9999px',
		'--theme-rounded-container': '8px',
		'--theme-border-base': '1px',
		// =~= Theme On-X Colors =~=
		'--on-primary': '0 0 0',
		'--on-secondary': '0 0 0',
		'--on-tertiary': '0 0 0',
		'--on-success': '0 0 0',
		'--on-warning': '0 0 0',
		'--on-error': '255 255 255',
		'--on-surface': '255 255 255',
		// =~= Theme Colors  =~=
		// primary | #0098FF
		'--color-primary-50': '217 240 255', // #d9f0ff
		'--color-primary-100': '204 234 255', // #cceaff
		'--color-primary-200': '191 229 255', // #bfe5ff
		'--color-primary-300': '153 214 255', // #99d6ff
		'--color-primary-400': '77 183 255', // #4db7ff
		'--color-primary-500': '0 152 255', // #0098FF
		'--color-primary-600': '0 137 230', // #0089e6
		'--color-primary-700': '0 114 191', // #0072bf
		'--color-primary-800': '0 91 153', // #005b99
		'--color-primary-900': '0 74 125', // #004a7d
		// secondary | #FF0098
		'--color-secondary-50': '255 217 240', // #ffd9f0
		'--color-secondary-100': '255 204 234', // #ffccea
		'--color-secondary-200': '255 191 229', // #ffbfe5
		'--color-secondary-300': '255 153 214', // #ff99d6
		'--color-secondary-400': '255 77 183', // #ff4db7
		'--color-secondary-500': '255 0 152', // #FF0098
		'--color-secondary-600': '230 0 137', // #e60089
		'--color-secondary-700': '191 0 114', // #bf0072
		'--color-secondary-800': '153 0 91', // #99005b
		'--color-secondary-900': '125 0 74', // #7d004a
		// tertiary | #9a9996
		'--color-tertiary-50': '240 240 239', // #f0f0ef
		'--color-tertiary-100': '235 235 234', // #ebebea
		'--color-tertiary-200': '230 230 229', // #e6e6e5
		'--color-tertiary-300': '215 214 213', // #d7d6d5
		'--color-tertiary-400': '184 184 182', // #b8b8b6
		'--color-tertiary-500': '154 153 150', // #9a9996
		'--color-tertiary-600': '139 138 135', // #8b8a87
		'--color-tertiary-700': '116 115 113', // #747371
		'--color-tertiary-800': '92 92 90', // #5c5c5a
		'--color-tertiary-900': '75 75 74', // #4b4b4a
		// success | #62e923
		'--color-success-50': '231 252 222', // #e7fcde
		'--color-success-100': '224 251 211', // #e0fbd3
		'--color-success-200': '216 250 200', // #d8fac8
		'--color-success-300': '192 246 167', // #c0f6a7
		'--color-success-400': '145 240 101', // #91f065
		'--color-success-500': '98 233 35', // #62e923
		'--color-success-600': '88 210 32', // #58d220
		'--color-success-700': '74 175 26', // #4aaf1a
		'--color-success-800': '59 140 21', // #3b8c15
		'--color-success-900': '48 114 17', // #307211
		// warning | #f5c211
		'--color-warning-50': '254 246 219', // #fef6db
		'--color-warning-100': '253 243 207', // #fdf3cf
		'--color-warning-200': '253 240 196', // #fdf0c4
		'--color-warning-300': '251 231 160', // #fbe7a0
		'--color-warning-400': '248 212 88', // #f8d458
		'--color-warning-500': '245 194 17', // #f5c211
		'--color-warning-600': '221 175 15', // #ddaf0f
		'--color-warning-700': '184 146 13', // #b8920d
		'--color-warning-800': '147 116 10', // #93740a
		'--color-warning-900': '120 95 8', // #785f08
		// error | #e01b24
		'--color-error-50': '250 221 222', // #faddde
		'--color-error-100': '249 209 211', // #f9d1d3
		'--color-error-200': '247 198 200', // #f7c6c8
		'--color-error-300': '243 164 167', // #f3a4a7
		'--color-error-400': '233 95 102', // #e95f66
		'--color-error-500': '224 27 36', // #e01b24
		'--color-error-600': '202 24 32', // #ca1820
		'--color-error-700': '168 20 27', // #a8141b
		'--color-error-800': '134 16 22', // #861016
		'--color-error-900': '110 13 18', // #6e0d12
		// surface | #464646
		'--color-surface-50': '227 227 227', // #e3e3e3
		'--color-surface-100': '218 218 218', // #dadada
		'--color-surface-200': '209 209 209', // #d1d1d1
		'--color-surface-300': '181 181 181', // #b5b5b5
		'--color-surface-400': '126 126 126', // #7e7e7e
		'--color-surface-500': '70 70 70', // #464646
		'--color-surface-600': '63 63 63', // #3f3f3f
		'--color-surface-700': '53 53 53', // #353535
		'--color-surface-800': '42 42 42', // #2a2a2a
		'--color-surface-900': '34 34 34' // #222222
	}
}
