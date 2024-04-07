import type { ComponentProps, PropsWithChildren } from 'react';
import { Text as BaseText } from 'react-native';
import { cn } from '$/utils';

// https://github.com/callstack/react-native-paper/issues/1409#issuecomment-544969937
export default function Text({ children, className, ...props }: PropsWithChildren<ComponentProps<typeof BaseText>>) {
	return (
		<BaseText className={cn('text-black dark:text-white', className)} {...props}>
			{children}
		</BaseText>
	);
}
