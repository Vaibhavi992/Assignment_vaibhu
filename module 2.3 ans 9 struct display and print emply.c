#include<stdio.h>
struct employee{
	int emp_no,age;
	char name[100],add[100]
};
int main()
{
	struct employee e1;
	
	printf("enter emp no");
	scanf("%d",&e1.emp_no);
	printf("\nenter age");
	scanf("%d",&e1.age);
	printf("\nenter name");
	scanf("%s",&e1.name);
	printf("\nenter address");
	scanf("%s",&e1.add);
	printf("details of employee %d %d %s %s",e1.emp_no,e1.age,e1.name,e1.add);
	
	return 0;
}
