from pathlib import Path
from shutil import rmtree

from fastapi import APIRouter, Query, Response, HTTPException

router = APIRouter(prefix='/branches')
files = Path('files')


@router.get('/')
def list_branches():
    return files.iterdir()


@router.post('/', status_code=201)
def create_branch(branch_id: str = Query(default=None, alias='id')):
    branch = files / branch_id
    if branch.is_dir():
        raise HTTPException(409, 'The specified branch ID already exists')

    branch.mkdir()
    return Response()


@router.get('/{branch_id}')
def read_branch(branch_id: str = Query(default=None, alias='id')):
    branch = files / branch_id
    if not branch.is_dir():
        raise HTTPException(404, 'The specified branch ID does not exist')

    return branch.iterdir()


@router.patch('/{branch_id}', status_code=204)
def update_branch(new_id: str, branch_id: str = Query(default=None, alias='id')):
    branch = files / branch_id
    if not branch.is_dir():
        raise HTTPException(404, 'The specified branch ID does not exist')

    branch.rename(files / new_id)
    return Response()


@router.delete('/{id}')
def delete_branch(branch_id: str = Query(default=None, alias='id')):
    branch = files / branch_id
    if not branch.is_dir():
        raise HTTPException(404, 'The specified branch ID does not exist')

    rmtree(branch)
    return Response()
