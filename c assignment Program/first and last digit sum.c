#include<stdio.h>
int main()
{
	int num,sum=0,fd,ld;
	num=1234;
	printf("The number is:%d\n",num);
	//find last digit num
	ld=num%10;
	while(num>=10)
	{
		num=num/10;
	}
	fd=num;
	//calculate sum of fd and ld
	sum=fd+ld;
	printf("sum of first and last digit=%d",sum);
	return 0;
}
